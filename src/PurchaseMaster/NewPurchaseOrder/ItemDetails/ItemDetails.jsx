import { useState, useEffect } from "react"
import { FaTrash } from "react-icons/fa"
import {  fetchItemFields } from "../../../Service/PurchaseApi"
import { toast, ToastContainer } from "react-toastify"
import { getUnitCode } from "../../../Service/Api"

const ItemDetails = ({ updateFormData }) => {
  const [itemDetails, setItemDetails] = useState([])
  const [currentItem, setCurrentItem] = useState({
    Item: "",
    ItemDescription: "",
    ItemSize: "",
    Rate: "",
    HSN_SAC_Code: "",
    Number: "",
    Disc: "",
    Qty: "",
    Unit: "",
    Particular: "",
    Mill_Name: "",
    DeliveryDt: "",
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [unitCodes, setUnitCodes] = useState([])

  // Fetch items on component mount
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://13.201.136.34:8000/Purchase/get-item-details/")
        const data = await response.json()
        if (data && data.ItemDetails && Array.isArray(data.ItemDetails)) {
          setItemDetails(data.ItemDetails)
        } else {
          throw new Error("Invalid data format")
        }
      } catch (error) {
        console.error("Error fetching items:", error)
        toast.error("Failed to fetch items.")
      }
    }
    fetchItems()
  }, [])

  // Fetch unit codes on mount
  useEffect(() => {
    const fetchUnitCodes = async () => {
      try {
        const data = await getUnitCode()
        console.log("Fetched Unit Codes:", data)
        setUnitCodes(data)
      } catch (error) {
        console.error("Error fetching unit codes:", error)
      }
    }
    fetchUnitCodes()
  }, [])

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setCurrentItem((prev) => ({ ...prev, [name]: value }))
  }

  // Search for item
  const handleSearch = async () => {
    if (!currentItem.Item.trim()) {
      setErrors({ Item: "Please enter a part number or item description." })
      return
    }

    setLoading(true)
    try {
      const data = await fetchItemFields(currentItem.Item)
      console.log("Search Results:", data)

      if (data.length > 0) {
        const item = data[0]
        setCurrentItem((prevData) => ({
          ...prevData,
          Item: item.part_no || "",
          ItemDescription: item.Name_Description || "",
          ItemSize: item.Item_Size || "",
          Rate: item.Rate || "",
          HSN_SAC_Code: item.HSN_SAC_Code || "",
        }))
        setErrors({})
      } else {
        setErrors({ Item: "No matching item found." })
      }
    } catch (error) {
      setErrors({ Item: "Error fetching item details." })
    } finally {
      setLoading(false)
    }
  }

  // Handle select change
  const handleSelectChange = (e) => {
    setCurrentItem({ ...currentItem, Unit: e.target.value })
  }

  // Add item to the list
  const addItem = () => {
    const validationErrors = validateItem(currentItem)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      toast.error("Please correct the errors before adding the item.")
      return
    }

    if (currentItem.Item && currentItem.ItemDescription) {
      const newItem = {
        ...currentItem,
        id: itemDetails.length + 1,
        GST_Details: {
          HSN: currentItem.HSN_SAC_Code,
          CGST: { Rate: 0, Amt: 0 },
          SGST: { Rate: 0, Amt: 0 },
          IGST: { Rate: 0, Amt: 0 },
        },
      }
      const updatedItems = [...itemDetails, newItem]
      setItemDetails(updatedItems)
      updateFormData("Item_Detail_Enter", updatedItems)
      setCurrentItem({
        Item: "",
        ItemDescription: "",
        ItemSize: "",
        Rate: "",
        HSN_SAC_Code: "",
        Number: "",
        Disc: "",
        Qty: "",
        Unit: "",
        Particular: "",
        Mill_Name: "",
        DeliveryDt: "",
      })
    } else {
      toast.error("Item and Item Description are required.")
    }
  }

  // Delete item
  const handleDelete = (id) => {
    const updatedItems = itemDetails.filter((item) => item.id !== id)
    setItemDetails(updatedItems)
    updateFormData("Item_Detail_Enter", updatedItems)
  }


  const validateItem = (item) => {
    const newErrors = {}
    if (item.Item.length > 30) newErrors.Item = "Ensure this field has no more than 30 characters."
    if (isNaN(Number.parseFloat(item.Rate))) newErrors.Rate = "A valid number is required."
    if (isNaN(Number.parseFloat(item.Disc))) newErrors.Discount = "A valid number is required."
    if (isNaN(Number.parseInt(item.Qty))) newErrors.Qty = "A valid integer is required."
    const subTotal = Number.parseFloat(item.Rate) * Number.parseInt(item.Qty)
    if (isNaN(subTotal)) newErrors.SubTotal = "A valid number is required."
    return newErrors
  }


  return (
    <div className="container-fluid">
      <ToastContainer />
      <div className="row">
        <div className="itemdetailsMain">
          <div className="item-details">
            <div className="table-container">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th>SE Item</th>
                    <th>Item Description</th>
                    <th>Item Size</th>
                    <th>Rate</th>
                    <th>HSN Code</th>
                    <th>Number</th>
                    <th>Disc %</th>
                    <th>QTY</th>
                    <th>Unit</th>
                    <th>Particular</th>
                    <th>Make / Mill Name</th>
                    <th>Delivery Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="Item"
                        className="form-control"
                        placeholder="Search"
                        value={currentItem.Item}
                        onChange={handleChange}
                      />
                      <span>
                        <button className="btn" onClick={handleSearch} disabled={loading}>
                          {loading ? "Searching..." : "Search"}
                        </button>
                      </span>
                      {errors.Item && <p className="error-text">{errors.Item}</p>}
                    </td>
                    <td>
                      <textarea
                        name="ItemDescription"
                        className="form-control"
                        rows="2"
                        value={currentItem.ItemDescription}
                        onChange={handleChange}
                      ></textarea>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="ItemSize"
                        className="form-control"
                        value={currentItem.ItemSize}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Rate"
                        className="form-control"
                        value={currentItem.Rate}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="HSN_SAC_Code"
                        className="form-control"
                        value={currentItem.HSN_SAC_Code}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Number"
                        className="form-control"
                        value={currentItem.Number}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Disc"
                        className="form-control"
                        value={currentItem.Disc}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Qty"
                        className="form-control"
                        value={currentItem.Qty}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <select
                        id="unitCode"
                        className="form-select"
                        value={currentItem.Unit}
                        onChange={handleSelectChange}
                      >
                        <option value="">Select ..</option>
                        {unitCodes.map((unit, index) => (
                          <option key={index} value={unit.name}>
                            {unit.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <textarea
                        name="Particular"
                        className="form-control"
                        rows="2"
                        value={currentItem.Particular}
                        onChange={handleChange}
                      ></textarea>
                    </td>
                    <td>
                      <textarea
                        name="Mill_Name"
                        className="form-control"
                        rows="2"
                        value={currentItem.Mill_Name}
                        onChange={handleChange}
                      ></textarea>
                    </td>
                    <td>
                      <input
                        type="date"
                        name="DeliveryDt"
                        className="form-control"
                        value={currentItem.DeliveryDt}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <button type="button" className="btn" onClick={addItem}>
                        Add Item
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="item-table">
            <div className="table-container table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Sr</th>
                    <th>Item Code</th>
                    <th>Item Description</th>
                    <th>Rate</th>
                    <th>Disc %</th>
                    <th>QTY</th>
                    <th>Unit</th>
                    <th>Particular</th>
                    <th>Make / Mill Name</th>
                    <th>Delivery Date</th>
                    <th>GST Details</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {itemDetails.map((item, index) => (
                    <tr key={item.id || index}>
                      <td>{index + 1}</td>
                      <td>
                        {item.Item}
                        <br />
                        {item.GST_Details?.HSN}
                      </td>
                      <td>{item.ItemDescription}</td>
                      <td>{item.Rate}</td>
                      <td>{item.Disc}</td>
                      <td>{item.Qty}</td>
                      <td>{item.Unit}</td>
                      <td>{item.Particular}</td>
                      <td>{item.Mill_Name}</td>
                      <td>{item.DeliveryDt}</td>
                      <td>
                        CGST: {item.GST_Details?.CGST?.Rate || 0}%
                        <br />
                        SGST: {item.GST_Details?.SGST?.Rate || 0}%
                        <br />
                        IGST: {item.GST_Details?.IGST?.Rate || 0}%
                      </td>
                      <td>
                        <button className="btn" onClick={() => handleDelete(item.id)}>
                          <FaTrash />
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
    </div>
  )
}

export default ItemDetails

