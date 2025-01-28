import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { getItems, deleteItem, fetchItemFields } from "../../../Service/PurchaseApi";
import { toast, ToastContainer } from "react-toastify";
import { getUnitCode } from "../../../Service/Api";

const ItemDetails = ({ updateFormData }) => {
  const [itemDetails, setItemDetails] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    Item: "",
    ItemDescription: "",
    ItemSize: "",
    Rate: "",
    Disc: "",
    Qty: "",
    Unit: "",
    Particular: "",
    Mill_Name: "",
    DeliveryDt: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [unitCodes, setUnitCodes] = useState([]);

  // Fetch items on component mount
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getItems();
        console.log("Fetched Items:", items); // Debugging
        setItemDetails(items);
      } catch (error) {
        toast.error("Failed to fetch items.");
      }
    };
    fetchItems();
  }, []);

  // Fetch unit codes on mount
  useEffect(() => {
    const fetchUnitCodes = async () => {
      try {
        const data = await getUnitCode();
        console.log("Fetched Unit Codes:", data); // Debugging
        setUnitCodes(data);
      } catch (error) {
        console.error("Error fetching unit codes:", error);
      }
    };
    fetchUnitCodes();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem((prev) => ({ ...prev, [name]: value }));
  };

  // Search for item
  const handleSearch = async () => {
    if (!currentItem.Item.trim()) {
      setErrors({ Item: "Please enter a part number or item description." });
      return;
    }

    setLoading(true);
    try {
      const data = await fetchItemFields(currentItem.Item);
      console.log("Search Results:", data); // Debugging
      if (data.length > 0) {
        const item = data[0];
        setCurrentItem((prevData) => ({
          ...prevData,
          Item: item.part_no || "",
          ItemDescription: item.Name_Description || "",
          ItemSize: item.Item_Size || "",
          Rate: item.Rate || "",
        }));
        setErrors({});
      } else {
        setErrors({ Item: "No matching item found." });
      }
    } catch (error) {
      setErrors({ Item: "Error fetching item details." });
    } finally {
      setLoading(false);
    }
  };

  // Handle select change
  const handleSelectChange = (e) => {
    setCurrentItem({ ...currentItem, Unit: e.target.value });
  };

  // Add item to the list
  const addItem = () => {
    if (currentItem.Item && currentItem.ItemDescription) {
      const updatedItems = [...itemDetails, currentItem];
      console.log("Updated Items before sending:", updatedItems); // Debugging
      setItemDetails(updatedItems);
      updateFormData("Item_Detail_Enter", updatedItems); // Update parent form data
      setCurrentItem({
        Item: "",
        ItemDescription: "",
        ItemSize: "",
        Rate: "",
        Disc: "",
        Qty: "",
        Unit: "",
        Particular: "",
        Mill_Name: "",
        DeliveryDt: "",
      });
    } else {
      toast.error("Item and Item Description are required.");
    }
  };

  // Delete item
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
        setLoading(true);
        try {
            await deleteItem(id);
            setItemDetails((prevItems) => prevItems.filter((item) => item.id !== id));
        } catch (error) {
            alert('Failed to delete item. Please try again.');
        } finally {
            setLoading(false);
        }
    }
};


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
                    <th>Note</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {itemDetails.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.Item}</td>
                      <td>{item.ItemDescription}</td>
                      <td>{item.Rate}</td>
                      <td>{item.Disc}</td>
                      <td>{item.Qty}</td>
                      <td>{item.Unit}</td>
                      <td>{item.Particular}</td>
                      <td>{item.Mill_Name}</td>
                      <td>{item.DeliveryDt}</td>
                      <td></td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => handleDelete(item.id)}
                        >
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
  );
};

export default ItemDetails;
