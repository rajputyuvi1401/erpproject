import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { addItem, getItems, updateItem, deleteItem } from '../../../Service/PurchaseApi';
import { toast, ToastContainer } from 'react-toastify';

const ItemDetails = () => {
  const [itemDetails, setItemDetails] = useState([]);
  const [formData, setFormData] = useState({
    Item: '',
    ItemDescription: '',
    ItemSize: '',
    Rate: '',
    Disc: '',
    Qty: '',
    Unit: '',
    Particular: '',
    Mill_Name: '',
    DeliveryDt: '',
  });
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getItems();
        setItemDetails(items);
      } catch (error) {
        toast.error('Failed to fetch items.');
      }
    };

    fetchItems();
  }, []);

  const validateItemDetails = (data) => {
    const errors = {};
    if (!data.Item) errors.Item = 'Item is required';
    if (!data.ItemDescription) errors.ItemDescription = 'Item Description is required';
    // Add more validations as needed
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    const validationErrors = validateItemDetails(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await addItem(formData);
      toast.success('Item added successfully!');
      setFormData({
        Item: '',
        ItemDescription: '',
        ItemSize: '',
        Rate: '',
        Disc: '',
        Qty: '',
        Unit: '',
        Particular: '',
        Mill_Name: '',
        DeliveryDt: '',
      });
      const updatedItems = await getItems();
      setItemDetails(updatedItems);
    } catch (error) {
      toast.error('Failed to add item.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      toast.success('Item deleted successfully!');
      const updatedItems = await getItems();
      setItemDetails(updatedItems);
    } catch (error) {
      toast.error('Failed to delete item.');
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item.id); // Ensure you have an `id` property in your item
  };

  const handleUpdate = async () => {
    const validationErrors = validateItemDetails(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await updateItem(editId, formData);
      toast.success('Item updated successfully!');
      setFormData({
        Item: '',
        ItemDescription: '',
        ItemSize: '',
        Rate: '',
        Disc: '',
        Qty: '',
        Unit: '',
        Particular: '',
        Mill_Name: '',
        DeliveryDt: '',
      });
      setEditId(null);
      const updatedItems = await getItems();
      setItemDetails(updatedItems);
    } catch (error) {
      toast.error('Failed to update item.');
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
                    <th>Item</th>
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
                        <button className="btnpurchase" >Search</button>
                      </span>
                    </td>
                    <td>
                      <textarea
                        name="ItemDescription"
                        className="form-control"
                        rows="2"
                        value={formData.ItemDescription}
                        onChange={handleChange}
                      ></textarea>
                      {errors.ItemDescription && <p className="error-text">{errors.ItemDescription}</p>}
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
                        name="Unit"
                        className="form-control"
                        value={formData.Unit}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="unit1">Unit 1</option>
                        <option value="unit2">Unit 2</option>
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
                        <button className="btnpurchase" type='button' onClick={handleUpdate}>Update</button>
                      ) : (
                        <button className="btnpurchase" type='button' onClick={handleAdd}>Add</button>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="item-table">
            <div className="table-container">
              <table className="table table-responsive">
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
                    <tr key={item.id}> {/* Ensure items have a unique id */}
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
