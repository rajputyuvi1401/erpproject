import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { fetchPurchaseOrderById } from "../../../Service/PurchaseApi"
import jsPDF from "jspdf"
import "./POpdf.css"

const POpdf = () => {
  const [poData, setPoData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPo = async () => {
      try {
        setIsLoading(true)
        console.log("Fetching PO with ID:", id)
        const data = await fetchPurchaseOrderById(id)
        console.log("Fetched PO data:", data)
        setPoData(data)
      } catch (error) {
        console.error("Error fetching purchase order:", error)
        setError(error.message || "An unexpected error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPo()
  }, [id])

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    const doc = new jsPDF()
    const content = document.getElementById("po-content")

    doc.html(content, {
      callback: (doc) => {
        doc.save(`PO-${poData.PoNo}.pdf`)
      },
      x: 10,
      y: 10,
      width: 180,
      windowWidth: 650,
    })
  }

  if (isLoading) return <div>Loading...</div>

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => navigate(-1)} className="btn btn-primary">
          Go Back
        </button>
      </div>
    )
  }

  if (!poData) return <div>No data available for this purchase order.</div>

  console.log("Rendering PO data:", poData)

  return (
    <div className="POpdf">
    
      <div id="po-content">
        <h1>Purchase Order Details</h1>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <div>
            <h2>To,</h2>
            <p style={{ fontWeight: "bold" }}>{poData.ContactPerson || "N/A"}</p>
          </div>
          <div style={{ border: "1px solid #000", padding: "15px", borderRadius: "5px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <span>P.O. NO:</span>
              <span>{poData.PoNo}</span>
              <span>P.O. DATE:</span>
              <span>{poData.PoDate}</span>
              <span>Quotation No:</span>
              <span>{poData.QuotNo}</span>
              <span>Quot Date:</span>
              <span>{poData.QuotDate}</span>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
          <div>
            <h3>Bill To,</h3>
            <p>SHARP ENGINEERS</p>
            <p>A-31 MIDC WALUJ 431136</p>
            <p>GSTIN No: 27AAMFS1149Q1ZH</p>
            <p>PAN No: AAMFS1149Q</p>
          </div>
          <div>
            <h3>Ship To (Goods Delivered At),</h3>
            <p>SHARP ENGINEERS</p>
            <p>A-31 MIDC WALUJ 431136</p>
          </div>
        </div>

        <table className="table-container">
          <thead>
            <tr className="table-header">
              <th>No</th>
              <th>Item</th>
              <th>Description</th>
              <th>Size</th>
              <th>Qty.</th>
              <th>Unit</th>
              <th>Rate</th>
              <th>Disc(%)</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {poData.Item_Detail_Enter.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Item}</td>
                <td>{item.ItemDescription}</td>
                <td>{item.ItemSize}</td>
                <td>{item.Qty}</td>
                <td>{item.Unit}</td>
                <td>{item.Rate}</td>
                <td>{item.Disc}</td>
                <td>{(Number(item.Rate) * Number(item.Qty) * (1 - Number(item.Disc) / 100)).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="summary-box">
          <div>
            <span>Total (Rs)</span>
            <span>{poData.Gst_Details[0]?.SubTotal || "N/A"}</span>
          </div>
          <div>
            <span>CGST (Rs.)</span>
            <span>{poData.Gst_Details[0]?.CGST || "N/A"}</span>
          </div>
          <div>
            <span>SGST (Rs.)</span>
            <span>{poData.Gst_Details[0]?.SGST || "N/A"}</span>
          </div>
          <hr />
          <div style={{ fontWeight: "bold" }}>
            <span>Gross Amount (Rs.)</span>
            <span>{poData.Gst_Details[0]?.GR_Total || "N/A"}</span>
          </div>
        </div>

        <div className="terms">
          <h3>Terms & Conditions:</h3>
          <p>Delivery Address: A-31 MIDC WALUJ 431136</p>
          <p>Payment Terms: {poData.PaymentTerms || "N/A"}</p>
          <p>Delivery Date: {poData.DeliveryDate || "N/A"}</p>
        </div>

        <div className="footer">
          <div>
            <p>Prepared By</p>
            <p>{poData.PreparedBy || "N/A"}</p>
          </div>
          <div>
            <p>For SHARP ENGINEERS</p>
            <p>Authorised Signatory</p>
          </div>
        </div>
      </div>
      <div className="action-buttons d-flex">
        
        <button onClick={handlePrint} className="btn-primary">
          Print
        </button>
        <button onClick={handleDownload} className="btn-primary">
          Download PDF
        </button>
      </div>
    </div>
  )
}

export default POpdf

