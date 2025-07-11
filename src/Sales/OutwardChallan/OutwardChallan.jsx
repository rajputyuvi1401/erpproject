"use client"

import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import NavBar from "../../NavBar/NavBar.js"
import SideNav from "../../SideNav/SideNav.js"
import { createOutwardChallan, testApiConnection } from "../../Service/SalesApi.jsx"
import "./OutwardChallan.css"

const OutwardChallan = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    Plant: "ProduLink",
    Series: "",
    Vendor: "",
    challan_no: "",
    challan_date: "",
    challan_time: "",
    DcNo: "",
    transport_name: "",
    vehicle_no: "",
    estimated_value: "",
    DcDate: "",
    eway_bill_no: "",
    eway_bill_date: "",
    rev_charges: "No",
    rev_charges_amount: "",
    eway_bill_qty: "",
    remarknote: "",
    ship_to_add_code: "",
    challan_due_date: "",
    SelectWorkOrder: "",
    assessable_value: "",
    cgst: "",
    sgst: "",
    igst: "",
    grand_total: "",
    lr_no: "",
    lr_date: "",
    challan_items: [],
  })

  // Current item being added
  const [currentItem, setCurrentItem] = useState({
    ItemNo: "",
    Description: "",
    HeatCode: "",
    Qty: "",
    WipWt: "",
    TotWt: "",
    ProcessName: "",
    Packages: "",
    Value: "",
  })

  const [itemType, setItemType] = useState("FG")
  const [storeType, setStoreType] = useState("MainStore")
  const [apiStatus, setApiStatus] = useState(null)

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

  useEffect(() => {
    checkApiConnection()
  }, [])

  const checkApiConnection = async () => {
    try {
      const result = await testApiConnection()
      setApiStatus(result)
      if (!result.success) {
        console.error("API Connection Issue:", result.message)
      }
    } catch (error) {
      setApiStatus({ success: false, message: error.message })
      console.error("API Connection Error:", error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleItemChange = (e) => {
    const { name, value } = e.target
    setCurrentItem((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const addItem = () => {
    if (!currentItem.ItemNo || !currentItem.Description || !currentItem.Qty) {
      alert("Please fill required item fields")
      return
    }

    const newItem = {
      ...currentItem,
      ItemNo: (formData.challan_items.length + 1).toString().padStart(3, "0"),
    }

    setFormData((prev) => ({
      ...prev,
      challan_items: [...prev.challan_items, newItem],
    }))

    // Reset current item
    setCurrentItem({
      ItemNo: "",
      Description: "",
      HeatCode: "",
      Qty: "",
      WipWt: "",
      TotWt: "",
      ProcessName: "",
      Packages: "",
      Value: "",
    })
  }

  const deleteItem = (index) => {
    setFormData((prev) => ({
      ...prev,
      challan_items: prev.challan_items.filter((_, i) => i !== index),
    }))
  }

  const validateForm = () => {
    const requiredFields = [
      "Series",
      "Vendor",
      "challan_no",
      "challan_date",
      "challan_time",
      "DcNo",
      "transport_name",
      "vehicle_no",
      "estimated_value",
      "DcDate",
    ]

    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill ${field.replace("_", " ")}`)
        return false
      }
    }

    if (formData.challan_items.length === 0) {
      alert("Please add at least one item")
      return false
    }

    return true
  }

  const saveChallan = async () => {
    if (!validateForm()) {
      return
    }

    try {
      setLoading(true)

      // Log the data being sent for debugging
      console.log("Form data to be sent:", formData)

      // Check API connection first
      if (apiStatus && !apiStatus.success) {
        alert(`API Connection Issue: ${apiStatus.message}`)
        return
      }

      await createOutwardChallan(formData)
      alert("Challan saved successfully!")

      // Reset form
      setFormData({
        Plant: "ProduLink",
        Series: "",
        Vendor: "",
        challan_no: "",
        challan_date: "",
        challan_time: "",
        DcNo: "",
        transport_name: "",
        vehicle_no: "",
        estimated_value: "",
        DcDate: "",
        eway_bill_no: "",
        eway_bill_date: "",
        rev_charges: "No",
        rev_charges_amount: "",
        eway_bill_qty: "",
        remarknote: "",
        ship_to_add_code: "",
        challan_due_date: "",
        SelectWorkOrder: "",
        assessable_value: "",
        cgst: "",
        sgst: "",
        igst: "",
        grand_total: "",
        lr_no: "",
        lr_date: "",
        challan_items: [],
      })
    } catch (error) {
      console.error("Error saving challan:", error)

      // Show more specific error messages
      if (error.message.includes("Authentication failed")) {
        alert("Authentication Error: Please check your API credentials. Contact your system administrator.")
      } else if (error.message.includes("Validation error")) {
        alert("Data Validation Error: Please check all required fields and data formats.")
      } else if (error.message.includes("Network")) {
        alert("Network Error: Please check your internet connection and try again.")
      } else {
        alert(`Error saving challan: ${error.message}`)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="OutwardChallanMaster">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="OutwardChallan">
                  <div className="OutwardChallan-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title">Outward Challan</h5>
                      </div>
                      {apiStatus && (
                        <div className="col-md-12 mb-2">
                          <div className={`alert ${apiStatus.success ? "alert-success" : "alert-danger"} py-1`}>
                            <small>API Status: {apiStatus.success ? "✓ Connected" : `✗ ${apiStatus.message}`}</small>
                          </div>
                        </div>
                      )}
                      <div className="col-md-1">
                        <label>Plant</label>
                      </div>
                      <div className="col-md-1">
                        <select
                          className="form-control"
                          name="Plant"
                          value={formData.Plant}
                          onChange={handleInputChange}
                        >
                          <option value="ProduLink">ProduLink</option>
                        </select>
                      </div>

                      <div className="col-md-1">
                        <label>Series</label>
                      </div>
                      <div className="col-md-1">
                        <select
                          className="form-control"
                          name="Series"
                          value={formData.Series}
                          onChange={handleInputChange}
                        >
                          <option value="">Select</option>
                          <option value="57F5">57F5</option>
                          <option value="Rework">Rework</option>
                          <option value="Maintenance">Maintenance</option>
                          <option value="OPEN">OPEN</option>
                          <option value="Not For Bill">Not For Bill</option>
                          <option value="Tool And Die">Tool And Die</option>
                        </select>
                      </div>
                      <div className="col-md-1">
                        <input
                          type="text"
                          placeholder="##"
                          className="form-control"
                          name="SelectWorkOrder"
                          value={formData.SelectWorkOrder}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-1">
                        <label>Vendor</label>
                      </div>
                      <div className="col-md-2">
                        <input
                          type="text"
                          placeholder="Enter Name"
                          className="form-control"
                          name="Vendor"
                          value={formData.Vendor}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-1">
                        <button type="button" className="vndrbtn">
                          Select
                        </button>
                      </div>
                      <div className="col-md-1">
                        <button type="button" className="vndrbtn">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="OutwardChallan-main">
                    <div className="OutwardChallan-tabs">
                      <div className="tab-content" id="productionEntryTabsContent">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th className="d-flex align-items-center">
                                  <span>Type</span>
                                  <input
                                    type="radio"
                                    id="fg"
                                    name="itemType"
                                    value="FG"
                                    className="ms-2"
                                    checked={itemType === "FG"}
                                    onChange={(e) => setItemType(e.target.value)}
                                  />
                                  <label htmlFor="fg" className="ms-1">
                                    FG
                                  </label>
                                  <input
                                    type="radio"
                                    id="rm"
                                    name="itemType"
                                    value="RM"
                                    className="ms-2"
                                    checked={itemType === "RM"}
                                    onChange={(e) => setItemType(e.target.value)}
                                  />
                                  <label htmlFor="rm" className="ms-1">
                                    RM
                                  </label>
                                  <input
                                    type="radio"
                                    id="itemmaster"
                                    name="itemType"
                                    value="ITEMMASTER"
                                    className="ms-2"
                                    checked={itemType === "ITEMMASTER"}
                                    onChange={(e) => setItemType(e.target.value)}
                                  />
                                  <label htmlFor="itemmaster" className="ms-1">
                                    ITEM MASTER
                                  </label>
                                </th>
                                <th>Item Desc.</th>
                                <th className="d-flex align-items-center">
                                  <span>Store</span>
                                  <input
                                    type="radio"
                                    id="mainstore"
                                    name="storeType"
                                    value="MainStore"
                                    className="ms-2"
                                    checked={storeType === "MainStore"}
                                    onChange={(e) => setStoreType(e.target.value)}
                                  />
                                  <label htmlFor="mainstore" className="ms-1">
                                    Main Store
                                  </label>
                                  <input
                                    type="radio"
                                    id="reworkstore"
                                    name="storeType"
                                    value="ReworkStore"
                                    className="ms-2"
                                    checked={storeType === "ReworkStore"}
                                    onChange={(e) => setStoreType(e.target.value)}
                                  />
                                  <label htmlFor="reworkstore" className="ms-1">
                                    Rework Store
                                  </label>
                                </th>
                                <th>Quantity</th>
                                <th>Process/Operation</th>
                                <th>Package</th>
                                <th>Value</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="Enter Item Code"
                                    className="form-control"
                                    name="ItemNo"
                                    value={currentItem.ItemNo}
                                    onChange={handleItemChange}
                                  />
                                </td>
                                <td>
                                  <textarea
                                    className="form-control"
                                    name="Description"
                                    value={currentItem.Description}
                                    onChange={handleItemChange}
                                    placeholder="Item Description"
                                  ></textarea>
                                </td>
                                <td>
                                  <select className="form-control mb-2">
                                    <option value="">NOS</option>
                                  </select>
                                  <div>
                                    <label>Heat Code:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="HeatCode"
                                      value={currentItem.HeatCode}
                                      onChange={handleItemChange}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="mb-2">
                                    <label>Qty:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="Qty"
                                      value={currentItem.Qty}
                                      onChange={handleItemChange}
                                    />
                                  </div>
                                  <div>
                                    <label>WIP Wt:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="WipWt"
                                      value={currentItem.WipWt}
                                      onChange={handleItemChange}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <textarea
                                    className="form-control"
                                    name="ProcessName"
                                    value={currentItem.ProcessName}
                                    onChange={handleItemChange}
                                    placeholder="Process/Operation"
                                  ></textarea>
                                </td>
                                <td>
                                  <textarea
                                    className="form-control"
                                    name="Packages"
                                    value={currentItem.Packages}
                                    onChange={handleItemChange}
                                    placeholder="Package"
                                  ></textarea>
                                </td>
                                <td>
                                  <div className="mb-2">
                                    <label>Total Wt:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="TotWt"
                                      value={currentItem.TotWt}
                                      onChange={handleItemChange}
                                    />
                                  </div>
                                  <div>
                                    <label>Value:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="Value"
                                      value={currentItem.Value}
                                      onChange={handleItemChange}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <button className="vndrbtn" onClick={addItem}>
                                    Add
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Sr.</th>
                                <th>Item Code</th>
                                <th>Description</th>
                                <th>Heat Code</th>
                                <th>Qty</th>
                                <th>WIP Wt.</th>
                                <th>Total Wt.</th>
                                <th>Process Name</th>
                                <th>Pkg</th>
                                <th>Value</th>
                                <th>Del</th>
                              </tr>
                            </thead>
                            <tbody>
                              {formData.challan_items.map((item, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{item.ItemNo}</td>
                                  <td>{item.Description}</td>
                                  <td>{item.HeatCode}</td>
                                  <td>{item.Qty}</td>
                                  <td>{item.WipWt}</td>
                                  <td>{item.TotWt}</td>
                                  <td>{item.ProcessName}</td>
                                  <td>{item.Packages}</td>
                                  <td>{item.Value}</td>
                                  <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteItem(index)}>
                                      X
                                    </button>
                                  </td>
                                </tr>
                              ))}
                              {formData.challan_items.length === 0 && (
                                <tr>
                                  <td colSpan="11" className="text-center">
                                    No items added
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <tbody>
                                <tr>
                                  <td>Challan No:</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="challan_no"
                                      value={formData.challan_no}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                  <td>Transport Name:</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="transport_name"
                                      value={formData.transport_name}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                  <td>EWay Bill No:</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="eway_bill_no"
                                      value={formData.eway_bill_no}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                  <td>EWay Bill Qty:</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="eway_bill_qty"
                                      value={formData.eway_bill_qty}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                  <td>Challan Due Date :</td>
                                  <td>
                                    <input
                                      type="date"
                                      className="form-control"
                                      name="challan_due_date"
                                      value={formData.challan_due_date}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Challan Date:</td>
                                  <td>
                                    <input
                                      type="date"
                                      className="form-control"
                                      name="challan_date"
                                      value={formData.challan_date}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                  <td>Vehicle No:</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="vehicle_no"
                                      value={formData.vehicle_no}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                  <td>EWay Bill Date:</td>
                                  <td>
                                    <input
                                      type="date"
                                      className="form-control"
                                      name="eway_bill_date"
                                      value={formData.eway_bill_date}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                  <td rowSpan="2">Remarks / Note:</td>
                                  <td rowSpan="2">
                                    <textarea
                                      className="form-control"
                                      name="remarknote"
                                      value={formData.remarknote}
                                      onChange={handleInputChange}
                                    ></textarea>
                                  </td>
                                  <td rowSpan="2">Select Work Order:</td>
                                  <td rowSpan="2">
                                   <select className="form-control" name="" id="">
                                       <option> Select Work Order </option>
                                   </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Challan Time:</td>
                                  <td>
                                    <input
                                      type="time"
                                      className="form-control"
                                      name="challan_time"
                                      value={formData.challan_time}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                  <td>Estimated Value:</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="estimated_value"
                                      value={formData.estimated_value}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                  <td>Rev. Charges:</td>
                                  <td>
                                    <select
                                      className="form-control"
                                      name="rev_charges"
                                      value={formData.rev_charges}
                                      onChange={handleInputChange}
                                    >
                                      <option value="No">No</option>
                                      <option value="Yes">Yes</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td>D.C No:</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="DcNo"
                                      value={formData.DcNo}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                  <td>DC Date:</td>
                                  <td>
                                    <input
                                      type="date"
                                      className="form-control"
                                      name="DcDate"
                                      value={formData.DcDate}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                  <td>Rev.Ch.Amt:</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="rev_charges_amount"
                                      value={formData.rev_charges_amount}
                                      onChange={handleInputChange}
                                    />
                                  </td>
                                   <td>Ship To Add Code :</td>
                                  <td>
                                     <select className="form-select" name="" id="">
                                       <option>  </option>
                                   </select>
                                  </td>
                                  <td colSpan={2}>
                                    <button className="vndrbtn" onClick={saveChallan} disabled={loading}>
                                      {loading ? "Saving..." : "Save Challan"}
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-2">
                            <label htmlFor=" "> </label>
                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

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
  )
}

export default OutwardChallan

