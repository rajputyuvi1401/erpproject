import React, { useState } from "react";
import "./GStDetails.css";

const GSTDetails = ({ updateFormData = () => {} }) => {
  const [gstDetails, setGstDetails] = useState({
    ItemCode: "",
    HSN: "",
    Rate: "",
    Qty: "",
    SubTotal: "",
    Discount: { disc: "", amt: "" },
    Packing: "",
    Transport: "",
    ToolAmort: { value: "", amt: "" },
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
  });

  // Handle input changes for both flat and nested fields
  const handleInputChange = (e, parentKey = null, childKey = null) => {
    const { name, value } = e.target;

    setGstDetails((prev) => {
      const updatedDetails = { ...prev };

      if (parentKey && childKey) {
        updatedDetails[parentKey] = {
          ...updatedDetails[parentKey],
          [childKey]: value,
        };
      } else {
        updatedDetails[name] = value;
      }

      // Sync with parent component
      updateFormData("Gst_Details", updatedDetails);

      return updatedDetails;
    });
  };




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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="ItemCode"
                      value={gstDetails.ItemCode}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="HSN"
                      value={gstDetails.HSN}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="Rate"
                      value={gstDetails.Rate}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="Qty"
                      value={gstDetails.Qty}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="SubTotal"
                      value={gstDetails.SubTotal}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <div>
                      Disc:{" "}
                      <input
                        type="number"
                        className="form-control"
                        name="discount.Disc"
                        value={gstDetails.Discount.disc}
                        onChange={(e) => handleInputChange(e, "discount", "disc")}
                      />
                    </div>
                    <div>
                      Amt:{" "}
                      <input
                        type="number"
                        className="form-control"
                        name="discount.amt"
                        value={gstDetails.Discount.amt}
                        onChange={(e) => handleInputChange(e, "discount", "amt")}
                      />
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="Packing"
                      value={gstDetails.Packing}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="Transport"
                      value={gstDetails.Transport}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="ToolAmort.value"
                      value={gstDetails.ToolAmort.disc}
                      onChange={(e) => handleInputChange(e, "toolAmort", "value")}
                    />
                    <div>
                      Amt:{" "}
                      <input
                        type="number"
                        className="form-control"
                        name="ToolAmort.amt"
                        value={gstDetails.ToolAmort.amt}
                        onChange={(e) => handleInputChange(e, "toolAmort", "amt")}
                      />
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="AssValue"
                      value={gstDetails.AssValue}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="CGST"
                      value={gstDetails.CGST}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="SGST"
                      value={gstDetails.SGST}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="IGST"
                      value={gstDetails.IGST}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="Vat"
                      value={gstDetails.Vat}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      name="Cess"
                      value={gstDetails.Cess}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input type="number" className="form-control" name="Total" value={gstDetails.Total} onChange={handleInputChange} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="gsttable">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <table className="table table-bordered table-responsive">
                <tbody>
                  <tr>
                    <td>TDC Assable Value:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="TOC_AssableValue"
                        value={gstDetails.TOC_AssableValue}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>CGST:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="TOC_CGST"
                        value={gstDetails.TOC_CGST}
                        onChange={handleInputChange}
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
                        name="TOC_PackCharges"
                        value={gstDetails.TOC_PackCharges}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>SGST:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="TOC_SGST"
                        value={gstDetails.TOC_SGST}
                        onChange={handleInputChange}
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
                        name="TOC_TransportCost"
                        value={gstDetails.TOC_TransportCost}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>IGST:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="TOC_IGST"
                        value={gstDetails.TOC_IGST}
                        onChange={handleInputChange}
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
                        name="TOC_Insurance"
                        value={gstDetails.TOC_Insurance}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>VAT:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="TOC_VAT"
                        value={gstDetails.TOC_VAT}
                        onChange={handleInputChange}
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
                        name="TOC_InstallationCharges"
                        value={gstDetails.TOC_InstallationCharges}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>CESS:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="TOC_CESS"
                        value={gstDetails.TOC_CESS}
                        onChange={handleInputChange}
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
                        name="TOC_TDS"
                        value={gstDetails.TOC_TDS}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td htmlFor="GR_Total">GRAND TOTAL:</td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="GR_Total"
                        value={gstDetails.GR_Total}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GSTDetails

