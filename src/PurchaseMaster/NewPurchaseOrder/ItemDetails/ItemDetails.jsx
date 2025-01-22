import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import {
  addItem,
  getItems,
  updateItem,
  deleteItem,
  fetchItemFields,
} from "../../../Service/PurchaseApi";
import { toast, ToastContainer } from "react-toastify";
import { getUnitCode } from "../../../Service/Api";

const ItemDetails = ({ updateFormData }) => {
  const [itemDetails, setItemDetails] = useState([]);
  const [formData, setFormData] = useState({
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
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
    const [unitCodes, setUnitCodes] = useState([]);
  

  // Fetch items on component mount
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getItems();
        setItemDetails(items);
      } catch (error) {
        toast.error("Failed to fetch items.");
      }
    };
    fetchItems();
  }, []);

  // Validate item details
  const validateItemDetails = (data) => {
    const errors = {};
    if (!data.Item.trim()) errors.Item = "Item is required.";
    if (!data.ItemDescription.trim())
      errors.ItemDescription = "Item Description is required.";
    return errors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    updateFormData("Item_Detail_Enter", (prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add new item
  const handleAdd = async () => {
    const validationErrors = validateItemDetails(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await addItem(formData);
      toast.success("Item added successfully!");
      resetForm();
      const updatedItems = await getItems();
      setItemDetails(updatedItems);
    } catch (error) {
      toast.error("Failed to add item.");
    }
  };

  // Delete item
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      toast.success("Item deleted successfully!");
      const updatedItems = await getItems();
      setItemDetails(updatedItems);
    } catch (error) {
      toast.error("Failed to delete item.");
    }
  };

  // Edit item
  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item.id);
  };

  // Update item
  const handleUpdate = async () => {
    const validationErrors = validateItemDetails(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await updateItem(editId, formData);
      toast.success("Item updated successfully!");
      resetForm();
      const updatedItems = await getItems();
      setItemDetails(updatedItems);
    } catch (error) {
      toast.error("Failed to update item.");
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
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
    setErrors({});
    setEditId(null);
  };

  // Search for item
  const handleSearch = async () => {
    if (!formData.Item.trim()) {
      setErrors({ Item: "Please enter a part number or item description." });
      return;
    }

    setLoading(true);
    try {
      const data = await fetchItemFields(formData.Item);
      if (data.length > 0) {
        const item = data[0];
        setFormData((prevData) => ({
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

    useEffect(() => {
      const fetchUnitCodes = async () => {
        try {
          const data = await getUnitCode();
          setUnitCodes(data);
        } catch (error) {
          console.error("Error fetching unit codes:", error);
        }
      };
  
      fetchUnitCodes();
    }, []);
  
    const handleSelectChange = (e) => {
      setFormData({ ...formData, Unit: e.target.value });
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
                        value={formData.Item}
                        onChange={handleChange}
                      />
                      <span>
                        <button
                          className="btn"
                          onClick={handleSearch}
                          disabled={loading}
                        >
                          {loading ? "Searching..." : "Search"}
                        </button>
                      </span>
                      {errors.Item && (
                        <p className="error-text">{errors.Item}</p>
                      )}
                    </td>
                    <td>
                      <textarea
                        name="ItemDescription"
                        className="form-control"
                        rows="2"
                        value={formData.ItemDescription}
                        onChange={handleChange}
                      ></textarea>
                      {errors.ItemDescription && (
                        <p className="error-text">{errors.ItemDescription}</p>
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        name="ItemSize"
                        className="form-control"
                        value={formData.ItemSize}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Rate"
                        className="form-control"
                        value={formData.Rate}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Disc"
                        className="form-control"
                        value={formData.Disc}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Qty"
                        className="form-control"
                        value={formData.Qty}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                    <select
  id="unitCode"
  className="form-select"
  value={formData.Unit}
  onChange={handleSelectChange} // Use the updated function here
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
                        value={formData.Particular}
                        onChange={handleChange}
                      ></textarea>
                    </td>
                    <td>
                      <textarea
                        name="Mill_Name"
                        className="form-control"
                        rows="2"
                        value={formData.Mill_Name}
                        onChange={handleChange}
                      ></textarea>
                    </td>
                    <td>
                      <input
                        type="date"
                        name="DeliveryDt"
                        className="form-control"
                        value={formData.DeliveryDt}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      {editId ? (
                        <button
                          className="btn"
                          type="button"
                          onClick={handleUpdate}
                        >
                          Update
                        </button>
                      ) : (
                        <button
                          className="btn"
                          type="button"
                          onClick={handleAdd}
                        >
                          Add
                        </button>
                      )}
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
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                {itemDetails.map((item, index) => (
                    <tr key={item.id}>
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
                          onClick={() => handleEdit(item)}
                        >
                          <FaEdit />
                        </button>
                      </td>
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
