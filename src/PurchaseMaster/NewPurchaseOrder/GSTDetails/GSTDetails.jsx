import { useState, useEffect } from "react"
import { toast } from "react-toastify"
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

  useEffect(() => {
    const calculatedGSTDetails = itemDetails.map((item) => ({
      ItemCode: item.Item,
      HSN: item.HSN_SAC_Code,
      Rate: item.Rate,
      Qty: item.Qty,
      SubTotal: (item.Rate * item.Qty).toFixed(2),
      Discount: item.Disc,
      CGST: item.GST_Details?.CGST?.Rate || 0,
      SGST: item.GST_Details?.SGST?.Rate || 0,
      IGST: item.GST_Details?.IGST?.Rate || 0,
      Total: item.GST_Details?.Total || 0,
    }));
  
    setGstDetails(calculatedGSTDetails);
    updateFormData("Gst_Details", calculatedGSTDetails);
  }, [itemDetails, updateFormData]);
  
  const handleInputChange = (index, field, value) => {
    // Limit ItemCode to 30 characters
    if (field === "ItemCode" && value.length > 30) {
      toast.error("Item Code cannot exceed 30 characters.");
      return;
    }
  
    const updatedDetails = [...gstDetails];
    updatedDetails[index][field] = field === "Rate" || field === "Qty" || field === "CGST" || field === "SGST" || field === "IGST"
      ? Number(value) || 0
      : value;
    setGstDetails(updatedDetails);
    updateFormData("Gst_Details", updatedDetails);
  };
  
  

  const calculateTotals = () => {
    const totals = gstDetails.reduce(
      (acc, item) => {
        acc.subTotal += Number(item.SubTotal) || 0
        acc.cgst += Number(item.CGST) || 0
        acc.sgst += Number(item.SGST) || 0
        acc.igst += Number(item.IGST) || 0
        acc.total += Number(item.Total) || 0
        return acc
      },
      { subTotal: 0, cgst: 0, sgst: 0, igst: 0, total: 0 },
    )
    return totals
  }

  const totals = calculateTotals()

  return (
    <div className="GStDetails">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered table-responsive">
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
                        className="form-control"
                        value={detail.ItemCode}
                        onChange={(e) => handleInputChange(index, "ItemCode", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={detail.HSN}
                        onChange={(e) => handleInputChange(index, "HSN", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.Rate}
                        onChange={(e) => handleInputChange(index, "Rate", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.Qty}
                        onChange={(e) => handleInputChange(index, "Qty", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.SubTotal}
                        onChange={(e) => handleInputChange(index, "SubTotal", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.Discount}
                        onChange={(e) => handleInputChange(index, "Discount", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.Packing}
                        onChange={(e) => handleInputChange(index, "Packing", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.Transport}
                        onChange={(e) => handleInputChange(index, "Transport", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.ToolAmort}
                        onChange={(e) => handleInputChange(index, "ToolAmort", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.AssValue}
                        onChange={(e) => handleInputChange(index, "AssValue", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.CGST}
                        onChange={(e) => handleInputChange(index, "CGST", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.SGST}
                        onChange={(e) => handleInputChange(index, "SGST", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.IGST}
                        onChange={(e) => handleInputChange(index, "IGST", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.Vat}
                        onChange={(e) => handleInputChange(index, "Vat", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={detail.Cess}
                        onChange={(e) => handleInputChange(index, "Cess", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
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
      <div className="gsttable">
        <table className="table table-bordered table-responsive">
          <tbody>
            {gstDetails.length > 0 ? (
              <>
                <tr>
                  <td>TDC Assable Value:</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={gstDetails[0].TOC_AssableValue || ""}
                      onChange={(e) => handleInputChange(0, "TOC_AssableValue", e.target.value)}
                    />
                  </td>
                  <td>CGST:</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={totals.cgst.toFixed(2)}
                      onChange={(e) => handleInputChange(0, "TOC_CGST", e.target.value)}
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
                      className="form-control"
                      value={gstDetails[0].TOC_PackCharges || ""}
                      onChange={(e) => handleInputChange(0, "TOC_PackCharges", e.target.value)}
                    />
                  </td>
                  <td>SGST:</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={totals.sgst.toFixed(2)}
                      onChange={(e) => handleInputChange(0, "TOC_SGST", e.target.value)}
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
                      className="form-control"
                      value={gstDetails[0].TOC_TransportCost || ""}
                      onChange={(e) => handleInputChange(0, "TOC_TransportCost", e.target.value)}
                    />
                  </td>
                  <td>IGST:</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={totals.igst.toFixed(2)}
                      onChange={(e) => handleInputChange(0, "TOC_IGST", e.target.value)}
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
                      className="form-control"
                      value={gstDetails[0].TOC_Insurance || ""}
                      onChange={(e) => handleInputChange(0, "TOC_Insurance", e.target.value)}
                    />
                  </td>
                  <td>VAT:</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
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
                      className="form-control"
                      value={gstDetails[0].TOC_InstallationCharges || ""}
                      onChange={(e) => handleInputChange(0, "TOC_InstallationCharges", e.target.value)}
                    />
                  </td>
                  <td>CESS:</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
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
                      className="form-control"
                      value={gstDetails[0].TOC_TDS || ""}
                      onChange={(e) => handleInputChange(0, "TOC_TDS", e.target.value)}
                    />
                  </td>
                  <td>GRAND TOTAL:</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={totals.total.toFixed(2)}
                      onChange={(e) => handleInputChange(0, "GR_Total", e.target.value)}
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
  )
}

export default GSTDetails

