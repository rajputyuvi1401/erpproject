import React from "react";
import "./ItemDetails.css";
import { FaTrash } from "react-icons/fa";

const ItemDetails = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="itemdetailsMain">
          <div className="item-details">
            <div className="table-container">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th>
                      Item:{" "}
                      <label>
                        <input type="checkbox" /> Direct
                      </label>
                      <label>
                        <input type="checkbox" /> Indent
                      </label>
                    </th>
                    <th>Item Description:</th>
                    <th>Item Size:</th>
                    <th>Rate:</th>
                    <th>Disc %:</th>
                    <th>QTY:</th>
                    <th>Unit:</th>
                    <th>Particular:</th>
                    <th>Make / Mill Name:</th>
                    <th>Delivery Date:</th>
                    <th>
                      <label>
                        <input type="checkbox" /> GST
                      </label>
                      <label>
                        <input type="checkbox" /> Non-GST
                      </label>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </td>
                    <td>
                      <textarea className="form-control" rows="2"></textarea>
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="unit1">Unit 1</option>
                        <option value="unit2">Unit 2</option>
                      </select>
                    </td>
                    <td>
                      <textarea className="form-control" rows="2"></textarea>
                    </td>
                    <td>
                      <textarea className="form-control" rows="2"></textarea>
                    </td>
                    <td>
                      <input type="date" className="form-control" />
                    </td>
                    <td>
                      <button
                        className="btnpurchase"
                        style={{ textAlign: "end" }}
                      >
                        Add
                      </button>
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
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Item Code"
                      />
                    </td>
                    <td>
                      <textarea className="form-control" rows="2"></textarea>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Rate"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Disc %"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="QTY"
                      />
                    </td>
                    <td>
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="unit1">Unit 1</option>
                        <option value="unit2">Unit 2</option>
                      </select>
                    </td>
                    <td>
                      <textarea className="form-control" rows="2"></textarea>
                    </td>
                    <td>
                      <textarea className="form-control" rows="2"></textarea>
                    </td>
                    <td>
                      <input type="date" className="form-control" />
                    </td>
                    <td>
                      <textarea className="form-control" rows="2"></textarea>
                    </td>
                    <td>
                      <button className="btnpurchase">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
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
